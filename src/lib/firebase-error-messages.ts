/**
 * Maps Firebase Auth error codes to user-friendly error messages
 */
export function getFirebaseErrorMessage(error: any): string {
  const errorCode = error?.code || error?.message || '';
  
  // Extract the error code if it's in the format "auth/error-code"
  const code = errorCode.includes('/') ? errorCode.split('/')[1] : errorCode;
  
  const errorMessages: Record<string, string> = {
    // Sign in / Sign up errors
    'email-already-in-use': 'This email is already registered. Please sign in instead.',
    'invalid-email': 'Please enter a valid email address.',
    'weak-password': 'Password should be at least 6 characters long.',
    'wrong-password': 'Incorrect password. Please try again.',
    'invalid-credential': 'Invalid email or password. Please check your credentials.',
    'invalid-login-credentials': 'Invalid email or password. Please check your credentials.',
    'user-not-found': 'No account found with this email. Please sign up first.',
    'user-disabled': 'This account has been disabled. Please contact support.',
    
    // Password operations
    'requires-recent-login': 'For security reasons, please sign out and sign in again before making this change.',
    'too-many-requests': 'Too many failed attempts. Please try again later.',
    'network-request-failed': 'Network error. Please check your connection and try again.',
    
    // Email operations
    'expired-action-code': 'This verification link has expired. Please request a new one.',
    'invalid-action-code': 'This verification link is invalid. Please request a new one.',
    'user-token-expired': 'Your session has expired. Please sign in again.',
    
    // Account operations
    'operation-not-allowed': 'This operation is not allowed. Please contact support.',
    'missing-password': 'Please enter your password.',
    'missing-email': 'Please enter your email address.',
    
    // Multi-factor authentication
    'multi-factor-auth-required': 'Additional verification is required to sign in.',
    'second-factor-already-in-use': 'This second factor is already enrolled.',
    
    // General errors
    'internal-error': 'An unexpected error occurred. Please try again.',
    'invalid-api-key': 'Configuration error. Please contact support.',
    'app-not-authorized': 'This app is not authorized. Please contact support.',
    
    // Provider errors
    'account-exists-with-different-credential': 'An account already exists with the same email but different sign-in method.',
    'credential-already-in-use': 'This credential is already associated with a different account.',
    'provider-already-linked': 'This account is already linked to this provider.',
    
    // Session errors
    'popup-blocked': 'Sign-in popup was blocked. Please allow popups for this site.',
    'popup-closed-by-user': 'Sign-in was cancelled. Please try again.',
    'unauthorized-domain': 'This domain is not authorized. Please contact support.',
    
    // Quota errors
    'quota-exceeded': 'Quota exceeded. Please try again later.',
    
    // Validation errors
    'invalid-phone-number': 'Please enter a valid phone number.',
    'invalid-verification-code': 'Invalid verification code. Please try again.',
    'missing-verification-code': 'Please enter the verification code.',
  };
  
  return errorMessages[code] || error?.message || 'An unexpected error occurred. Please try again.';
}
