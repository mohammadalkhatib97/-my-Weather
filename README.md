# Weather App

Simple weather web application that uses the **OpenWeatherMap API** to fetch and display current weather information for any city.

---

## 📌 Project Overview

This project is a simple and responsive weather web app where users can search for real-time weather information by city name.  
It fetches data from the OpenWeatherMap API and displays temperature, weather conditions, and other useful information in a clean and user-friendly interface.

Additionally, this app is:

✅ **Containerized using Docker** (runs in an Nginx container).  
✅ **Kubernetes-ready** (with Deployment, Service, and Ingress configuration).  
✅ **Accessible via Ingress-Nginx** on a custom path (e.g., `/testpath`).

---

## 🚀 Features

- 🌤 Search weather by city name  
- 🌡 Display temperature, weather conditions, and more  
- 📱 Responsive and user-friendly interface  
- 🐳 Dockerized for easy deployment  
- ☸️ Kubernetes-ready with Ingress-Nginx

---

## 🛠 Technologies Used

- **HTML5**  
- **CSS3**  
- **JavaScript (Vanilla)**  
- **OpenWeatherMap API**  
- **Docker**  
- **Kubernetes (Ingress-Nginx)**

---

## 🖥️ How to Run Locally (Without Docker/Kubernetes)

1. **Clone the repository:**
```bash
git clone https://github.com/mohammadalkhatib97/-my-Weather.git


Running with Docker
docker --version
docker build -t weather-app .



docker run -d -p 80:80 weather-app


Open in your browser:
👉 http://localhost



Deploying on Kubernetes
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml

http://192.168.63.199/testpath


👤 Author
Author: Mohammad Alkhatib
Email: mohammad.j.alkhatib97@gmail.com
GitHub: mohammadalkhatib97


