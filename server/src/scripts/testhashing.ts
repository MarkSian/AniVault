import bcrypt from 'bcryptjs';

const testPasswordHashing = async () => {
  const password = 'test1234';
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Hashed password:', hashedPassword);

  const isValid = await bcrypt.compare(password, hashedPassword);
  console.log('Password comparison result:', isValid);
};

testPasswordHashing();