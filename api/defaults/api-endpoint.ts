const apiEndpoint = process.env.NODE_ENV == "development" ? 'http://localhost:5292/api' : "";
export default apiEndpoint