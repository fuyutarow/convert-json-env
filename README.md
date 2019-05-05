# convert-json-env

A CLI tool for converting JSON to env file.

# Usage

## Installation

To install `convert-json-env` you can use `yarn` or `npm`.

```sh
yarn global add convert-json-env

# or

npm install --global convert-json-env
```

## Example

```sh
$ cat example-firebaseConfig.json
{
    "apiKey": "abcdefghijklmnopqrstuvwxyz1234567890ABC",
    "authDomain": "myapp-1234a.firebaseapp.com",
    "databaseURL": "https://myapp-1234a.firebaseio.com",
    "projectId": "myapp-1234a",
    "storageBucket": "myapp-1234a.appspot.com",
    "messagingSenderId": "123456789012",
    "appId": "1:234567890124:web:1234567890abcdef"
}

$ convert-json-env example-firebaseConfig.json --out=.env.local --prefix=VUE_APP_

$ cat .env.local
VUE_APP_apiKey='abcdefghijklmnopqrstuvwxyz1234567890ABC'
VUE_APP_authDomain='myapp-1234a.firebaseapp.com'
VUE_APP_databaseURL='https://myapp-1234a.firebaseio.com'
VUE_APP_projectId='myapp-1234a'
VUE_APP_storageBucket='myapp-1234a.appspot.com'
VUE_APP_messagingSenderId='123456789012'
VUE_APP_appId='1:234567890124:web:1234567890abcdef'
```````

## All CLI Options

```
Usage:
	convert-json-env <input.file> <out.file> [options]
	convert-json-env config.json --prefix="export "
	convert-json-env config.json --out=.env.local --prefix=VUE_APP_

Options:
	--out		The output file path.
	--prefix	The prefix of environment variables in env file.
	--suffix	The suffix of environment variables in env file.
```
