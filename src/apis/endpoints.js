// const authenticationBaseUrl = `http://localhost:8080`;
// const customerBaseUrl = `http://localhost:8083`;
const authenticationBaseUrl = `http://185.249.227.127:8010`;
const customerBaseUrl = `http://185.249.227.127:8013`;
const businessBaseUrl = `http://185.249.227.127:8011`
// const customerPortalUrl = 'http://localhost:5174';
const customerPortalUrl = 'http://185.249.227.127:9001';

const authenticationApiEndpoints = `${authenticationBaseUrl}/v1`;
const customerApiEndpoints = `${customerBaseUrl}/v1`;

// USERS ENDPOINT
const users = `${customerApiEndpoints}/users`;
// CUSTOMERS ENDPOINT
const customers = `${customerApiEndpoints}/customers`;
// CUSTOMERS CATEGORIES
const customerCategories = `${customerApiEndpoints}/customer-categories`;
// CUSTOMER ACCOUNTS
const customerAccounts = `${customerApiEndpoints}/accounts`;
// NEWSLETTER
const newsletterCustomers = `${customerApiEndpoints}/newsletter`;
// AUTHENTICATION API
const authenticateLocal = `${authenticationApiEndpoints}/auth`;
// AUTHENTICATION OAUTH
const authenticateOAuth = `${authenticationApiEndpoints}/oauth`;

export const ROUTES = {
    ///////// THIRD PARTY ENDPOINTS /////

    // GET CUSTOMER SUBSCRIPTION
    // getCustomerSubscription: (leadId) => `${customersApiEndPointBase}/subscription/${leadId}`, // Append lead ID
    // GET CUSTOMER SUBSCRIPTION WITH ACCOUNT NUMBER
    // getCustomerSubscriptionWithAccountNumber: (accountNumber) => `${customersApiEndPointBase}/subscription/accountnumber?accountnumber=${accountNumber}`, // Account number should be appended

    // SIGN UP
    signUp: `${customerPortalUrl}/sign-up`,
    // SIGN IN
    login: `${customerPortalUrl}/login`,

}





