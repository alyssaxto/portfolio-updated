FROM mcr.microsoft.com/azure-functions/python:4-python3.11

WORKDIR /home/site/wwwroot

# Install the Functions Core Tools inside the container
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs
RUN npm install -g azure-functions-core-tools@4 --unsafe-perm true

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["func", "start", "--python", "--cors", "*"]