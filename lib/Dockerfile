name: whatsapp-bot
image: quay.io/suhailtechinfo/suhail-md # Your Docker image
command: ["npm", "start"]
workdir: /root/XLICON-MD/
sync:
  - .:/root/XLICON-MD/  # Sync your local project directory to /root/XLICON-MD/
forward:
  - 8000:8000  # Forward port 8000 from the container to your local machine