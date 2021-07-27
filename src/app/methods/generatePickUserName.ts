const generatePickUserName = (setUserInfos: Function) => {
  return () => {
    const userName = 'test'
    setUserInfos({ name: userName, isUserNamePicked: true })
  }
}

export default generatePickUserName
