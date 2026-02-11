
🐳 Docker Notes – Complete Guide
 What is a Container?

A container is a standard unit of software that packages:

    Application code

    Libraries

    Dependencies

    Runtime

So the application can run quickly and consistently across different environments.

A container includes everything needed to run an application, but shares the host OS kernel, making it lightweight.

 What is a Docker Image?

A Docker image is:

    A lightweight, standalone, executable package

    Contains everything needed to run an application:

        Code

        Runtime

        Libraries

        Dependencies

        Config files

Containers are created from Docker images.

📌 Container vs Virtual Machine (VM)
Resource Utilization
Containers

    Share host OS kernel

    Very lightweight

    Fast startup

    Low resource usage

Virtual Machines

    Full OS per VM

    Heavy resource usage

    Slower startup

    Larger size

Portability
Containers

    Highly portable

    Run anywhere Docker is installed

    Same image works across environments

VMs

    Need compatible hypervisor

    Less portable across platforms

Security & Isolation
VMs

    Strong isolation

    Separate OS per VM

    Better strict security boundary

Containers

    Process-level isolation

    Share kernel

    Slightly weaker isolation than VMs

📌 Why Containers are Lightweight

Containers use:

    OS-level virtualization

    Share host kernel

    Do NOT include full OS

Result:

    Smaller size

    Faster startup

Example:

    Ubuntu VM image → ~2–3 GB

    Ubuntu container base image → ~20–30 MB

📌 What is Docker?

Docker is a containerization platform that allows you to:

    Build container images

    Run containers

    Manage containers

    Push images to registries

    Deploy applications consistently

With Docker you can:

    Build images

    Run containers from images

    Push images to registries like Docker Hub

📌 Docker Architecture Components
Docker Daemon

    Core Docker service

    Manages:

        Images

        Containers

        Networks

        Volumes

    Listens to Docker API requests

    Can communicate with other daemons

Docker Client

    Command line tool (docker)

    Used to interact with Docker

    Sends commands to Docker daemon

Example:

docker run nginx

Docker Desktop

Packaged application for:

    Windows

    macOS

    Linux

Includes:

    Docker daemon

    Docker client

    GUI dashboard

    Supporting tools

Docker Registry

A registry stores Docker images.

Examples:

    Docker Hub

    Private registries

Used to:

    Push images

    Pull images

    Share images

📌 Installing Docker (Linux – example)

sudo dnf update
sudo dnf install docker.io -y

 Multi-Stage Builds
📌 What is Multi-Stage Build?

A multi-stage build is a Dockerfile technique where:

    Multiple FROM statements are used

    Each stage has a different purpose

Typical Stages

    Stage 1 → Build application

    Stage 2 → Prepare runtime

    Stage 3 → Final minimal image

Purpose:

    Separate build tools from runtime

    Reduce final image size

📌 Why Multi-Stage Builds?

Normal image: ~1.2 GB
Multi-stage image: ~250 MB

Benefits:

    Smaller images

    Faster pull & deploy

    Less storage usage

    Lower cloud cost

    Cleaner production images

📌 Example Concept (Simple)

FROM ubuntu AS builder
RUN install build-tools
COPY . /app
RUN build-app

FROM ubuntu
COPY --from=builder /app/output /app
CMD ["./app"]

💾 Docker Volumes & Bind Mounts
📌 Container Storage Behavior

    Container storage is temporary

    If container is removed → data is lost

    Need external storage for persistence

Solution:

    Volumes

    Bind mounts

📌 What is a Docker Volume?

A Docker volume is:

    Persistent storage

    Managed by Docker

    Stored outside container writable layer

    Data survives container deletion

Think of it as:

    Persistent storage managed by Docker

📌 Volume Use Cases

    Databases

    Uploaded files

    Media/static files (Django, etc.)

    Logs

    Shared data between containers

    Caches

📌 Bind Mount vs Volume
Bind Mount

    Uses a real host folder

    You control the path

    Direct host ↔ container mapping

Example:

-v /host/data:/container/data

Volume

    Managed by Docker

    Stored in Docker’s internal directory

    Cleaner and portable

Example:

-v myvol:/data

📌 Volume Commands

Create volume:

docker volume create myvol

Run container with volume:

docker run -v myvol:/data myimage

 Summary

Docker helps you:

    Package applications with dependencies

    Run consistently across environments

    Use lightweight containers

    Build optimized images with multi-stage builds

    Persist data with volumes

    Share images via registries

