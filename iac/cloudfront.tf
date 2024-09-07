resource "aws_cloudfront_distribution" "cv_demo" {

  origin {
    domain_name              = aws_s3_bucket.cv_demo.bucket_regional_domain_name
    origin_id                = aws_s3_bucket.cv_demo.id
    origin_access_control_id = aws_cloudfront_origin_access_control.cv-demo.id
  }

  enabled             = true
  is_ipv6_enabled     = false
  comment             = "Distribution of S3 cv-demo"
  default_root_object = "index.html"

  aliases = ["cv-demo-${var.environment}.theo-tonneau.com"]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.cv_demo.id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
    acm_certificate_arn            = data.aws_acm_certificate.cv_demo.arn
    ssl_support_method             = "sni-only"
    minimum_protocol_version       = "TLSv1.2_2021"
  }
}

resource "aws_cloudfront_origin_access_control" "cv-demo" {
  name                              = "cv-demo-oac"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
  origin_access_control_origin_type = "s3"
}

