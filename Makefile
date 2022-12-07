dev:
	npm run dev

img:
	docker build -t 'english-memo' --no-cache .

container: stop
	docker run --restart always --name english-memo-container -itd -p 3000:3000 english-memo

stop:
	docker stop english-memo-container || true && docker rm english-memo-container || true