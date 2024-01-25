# 디렉토리
- apps: expo 앱(cool-app, nice-app)
- packges: 각 앱에 공유되는 패키지(nice-package)

# 실행 방법
1. root 경로에서 `yarn install` 실행
2. 앱 경로에서 `yarn start` 실행

# nohoist 설정 방법
- 현재 nohoist를 사용하지 않도록 설정해놓은 상태입니다. nohoist를 사용할 경우, 루트 경로의 `/package.json`을 다음과 같이 수정하면 됩니다. 설정은 yarn에서 제공하는 [example 레포](https://github.com/connectdotz/yarn-nohoist-examples/tree/master/workspaces-examples/react-native/rn-expo)를 참고했습니다.
````json
// project root package.json
...
  "workspaces": {
    "packages": ["packages/*"],
    "nohoist": [
        "**/react-native", "**/react-native/**",
        "**/react-native-scripts", "**/react-native-scripts/**",
        "**/expo", "**/expo/**"
    ]
````
- `package.json` 저장 후 루트 경로에서 `yarn install --force`를 실행합니다.
- **참고** vrew에서 적용한 방식과 동일하게 세팅하려면, 아래와 같이 설정하면 됩니다.
````json
// project root package.json
...
  "workspaces": {
    "packages": ["packages/*"],
    "nohoist": [
        "**/cool-app", "**/cool-app/**",
        "**/nice-app", "**/nice-app/**",
    ]
````
