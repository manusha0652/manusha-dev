import { LearningTopic } from "../../../types";

export const topic: LearningTopic = {
  slug: "aws-cloud",
  title: "AWS Cloud",
  subtitle: "Hands-on with core AWS services through AWS SimuLearn practice labs.",
  description:
    "I've been working through AWS SimuLearn's scenario-based labs to build practical, hands-on experience with core AWS services — beyond just reading documentation.",
  currentFocus: ["Amazon EC2", "Amazon S3", "Availability Zones", "AWS Systems Manager", "Bucket policies"],
  whatImDoing: [
    "Completed AWS SimuLearn: Cloud Computing Essentials, earning a certificate for hosting a static website on Amazon S3.",
    "Deployed EC2 instances across separate Availability Zones for a more resilient setup in the Cloud First Steps lab.",
    "Practiced resizing EC2 instance types and connecting to instances with AWS Systems Manager and EC2 Instance Connect.",
  ],
  nextSteps: ["VPC networking", "IAM policies in depth", "Load balancing", "More AWS SimuLearn modules"],
  iconKey: "server",
  achievements: [
    {
      title: "Cloud First Steps",
      image: "/learning/aws-cloud/cloud-first-steps.png",
      description:
        "Deployed a stabilization system across two EC2 instances in separate Availability Zones within the same AWS Region, each with its own Amazon EBS volume, and configured a user data script to display instance details in a browser.",
    },
    {
      title: "Cloud Computing Essentials",
      image: "/learning/aws-cloud/cloud-computing-essentials.png",
      description:
        "Improved website reliability by migrating to Amazon S3 static website hosting — reviewed and secured a bucket policy, enabled static website hosting, and served the site directly from the bucket.",
      certificateLink: "/learning/aws-cloud/cloud-computing-essentials-certificate.pdf",
    },
    {
      title: "Computing Solutions",
      image: "/learning/aws-cloud/computing-solutions.png",
      description:
        "Scaled up an EC2 instance from t3.micro to m4.large to improve application performance, using AWS Systems Manager and EC2 Instance Connect to connect to and inspect instance metadata.",
    },
  ],
};
