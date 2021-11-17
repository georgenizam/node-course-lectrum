export const getConnectionString = () => {
    const {DB} = process.env
    if (!DB) {
        throw new ValidationError('Environment variable DB should be specified')
    }

    return DB
}