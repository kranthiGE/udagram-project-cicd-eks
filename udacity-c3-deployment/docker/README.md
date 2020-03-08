# Udagram Image Filtering Microservice

Author: Kranthi Kiran  
Created On: 02-Feb-2020  

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

## Tasks

### Setup Docker Environment
You'll need to install docker https://docs.docker.com/install/. Open a new terminal within the project directory and run:

1. Build the images: `docker-compose -f docker-compose-build.yaml build`
2. Push the images: `docker-compose -f docker-compose-build.yaml push`
3. Run the container: `docker-compose up`

### steps to create EKS cluster
`
eksctl create cluster \
--name udagram-dev \
--version 1.14 \
--region ap-south-1 \
--profile=eks
`

### commands to run to setup kubernetes
`
kubectl apply -f pod.yaml
kubectl get pod
kubectl get pod -o wide
kubectl logs pod-example
kubectl delete pods pod-example

kubectl apply -f aws-secret.yaml 
kubectl get secret aws-secret

kubectl apply -f env-secret.yaml 
kubectl get secret env-secret

kubectl get secrets
kubectl describe secrets/env-secret

kubectl create configMap -f env-configmap.yaml
kubectl get configMap env-config


kubectl apply -f backend-feed-deployment.yaml
kubectl get deployment
kubectl get pod
kubectl logs backend-feed-66949c7f67-mdcmz
kubectl describe pods

kubectl delete deployment backend-feed
kubectl get rs

kubectl apply -f reverseproxy-service.yaml 
kubectl apply -f backend-feed-service.yaml
kubectl apply -f backend-user-service.yaml 
kubectl get svc

kubectl apply -f reverseproxy-deployment.yaml 
`
