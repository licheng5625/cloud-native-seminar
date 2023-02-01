# CICD
CI/CD or CICD is the combined practices of continuous integration (CI) and (more often) continuous delivery or (less often) continuous deployment (CD)

![cd](./doc/cicd.png)
# Cloud Computing Platforms
a category of cloud computing services that provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure
![Paas](./doc/PaaS.svg)

![paas-vendors-technologies](./doc/paas-vendors-technologies.svg)
# What is K8s
Containers are a good way to bundle and run your applications. In a production environment, you need to manage the containers that run the applications and ensure that there is no downtime. For example, if a container goes down, another container needs to start.
Kubernetes provides you with a framework to run distributed systems resiliently.

![k8s](./doc/k8s.png)

# What is gardener
Deliver fully-managed clusters at scale everywhere with your own Kubernetes-as-a-Service.

![vb docker](./doc/gardener-logo.svg)

Gardener will mangage your k8s cluster across different hyperscalers.
![vb docker](./doc/lp-gardener-diagram.svg)

# Benifit of cloud service architect  
+ Standardization & productivity
+ Simplicity & faster configurations
+ Rapid Deployment
+ Multi-Cloud Platforms
+ Isolation
+ Security

# How to build and run
```
docker image build -t cloud-native-seminar .
```

```
docker run --rm -p 8080:8080 cloud-native-seminar
```
http://localhost:8080/user

