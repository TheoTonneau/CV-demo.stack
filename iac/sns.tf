resource "aws_sns_topic" "cv_demo" {
  name = "cv-demo-topic-${var.environment}"
}

resource "aws_sns_topic_subscription" "cv_demo" {
  endpoint  = "theo.tonneau49@gmail.com"
  protocol  = "email"
  topic_arn = aws_sns_topic.cv_demo.arn
}

resource "aws_sns_topic" "cv_demo_error" {
  name = "cv-demo-topic-${var.environment}-error"
}

resource "aws_sns_topic_subscription" "cv_demo_error" {
  endpoint  = "theo.tonneau49@gmail.com"
  protocol  = "email"
  topic_arn = aws_sns_topic.cv_demo_error.arn
}