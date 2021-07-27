const generatePickUserName = (setUserInfos: Function) => {
  return () => {
    const userName = 'test'
    setUserInfos({ name: userName })
  }
}

export default generatePickUserName
