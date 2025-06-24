#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ScalableBackendStack } from './scalable-backend-stack';

const app = new cdk.App();

new ScalableBackendStack(app, 'ScalableBackendStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  description: 'Scalable backend service with Auto Scaling Group, ALB, and Fargate clients',
});

app.synth();
