resource "aws_cloudfront_distribution" "cv-demo" {

  origin {
    origin_id   = "s3-${aws_s3_bucket.cv-demo.bucket}-origin"
    domain_name = aws_s3_bucket_website_configuration.cv-demo.website_endpoint
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "s3-${aws_s3_bucket.cv-demo.bucket}-origin"
    viewer_protocol_policy = "redirect-to-https"
  }

  enabled             = true
  is_ipv6_enabled     = false
  comment             = "CV demo distribution"
  default_root_object = "index.html"
  price_class         = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  staging = var.environment == "test" ? true : false

}

resource "aws_cloudfront_continuous_deployment_policy" "cv-demo" {
  enabled = var.environment == "test" ? true : false

  staging_distribution_dns_names {
    items    = [aws_cloudfront_distribution.cv-demo.domain_name]
    quantity = 1
  }

  traffic_config {
    type = "SingleWeight"
    single_weight_config {
      weight = "0.01"
      session_stickiness_config {
        idle_ttl    = 300
        maximum_ttl = 600
      }
    }
  }
}