import connectDB from '../config/db';

const testDBConnection = async () => {
    try {
        await connectDB();
        console.log('Database connection successful');
        process.exit(0);
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
};

testDBConnection();