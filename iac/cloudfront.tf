resource "aws_cloudfront_distribution" "cv-demo" {

  origin {
    origin_id   = aws_s3_bucket.cv-demo.bucket_regional_domain_name
    domain_name = aws_s3_bucket_website_configuration.cv-demo.website_endpoint
    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  default_cache_behavior {

    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.cv-demo.bucket_regional_domain_name
    viewer_protocol_policy = "allow-all"
  }

  ordered_cache_behavior {

    path_pattern = "/*"
    target_origin_id       = aws_s3_bucket.cv-demo.bucket_regional_domain_name
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]

    forwarded_values {

      query_string = false
      headers      = ["Origin"]
      cookies {

        forward = "none"

      }

    }
  }


  enabled             = true
  is_ipv6_enabled     = false
  comment             = "CV demo distribution"
  default_root_object = "index.html"
  price_class         = "PriceClass_100"
  http_version        = "http2and3"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  #staging = var.environment == "test" ? true : false

}
