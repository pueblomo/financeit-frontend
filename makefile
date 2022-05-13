buildDocker:
	docker build -t my-frontend .

startBackend:
	npm run start-server

startLocalbackend:
	npm run start-server-local
