const getEnvVar = (key: string): string => {
    const value = process.env[key];
    if (!value) {
      throw new Error(`환경변수 ${key}가 정의되지 않았습니다.`);
    }
    return value;
  };
  
  const getMongoDB_URI = (): string => {
    const host = getEnvVar('MONGODB_HOST');
    const username = getEnvVar('MONGODB_USERNAME');
    const password = getEnvVar('MONGODB_PASSWORD');
    const database = getEnvVar('MONGODB_DATABASE');
    const port = getEnvVar('MONGODB_PORT');
  
    return `mongodb://${username}:${password}@${host}:${port}/${database}`;
  };
  
  export const MONGODB_URI = getMongoDB_URI();