start:
	npm start

create:
	npx babel-node createComponent.js

install:
	npm install

build:
	npm run build

test:
	npm test

lint:
	npx eslint .

deploy:
	npm run build
	surge ./build re-store.surge.sh

.PHONY: test