import { MONGODB_URI } from '@/config/env';
import mongoose from 'mongoose';

if (!MONGODB_URI) {
  throw new Error('env 파일에 MONGODB_URI가 설정되어 있지 않습니다.');
}

async function dbConnect() {
  // 연결이 되었거나 연결 중일 때
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error('몽고디비 연결 에러', error);
    process.exit(1); // 오류 발생 시 프로세스 종료
  }
}

export default dbConnect;
