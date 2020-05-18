export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'


export function logIn(userId) {
    try {
        window.sessionStorage.setItem('userId', userId)
    }
    catch {
        // intentionally ignore, there's nothing clever we could do here.
    }
    return {
        type: LOG_IN,
        userId
    }
}
export function logOut() {
    try {
        window.sessionStorage.setItem('userId', '')
    }
    catch {
        // intentionally ignore, there's nothing clever we could do here.
    }
    return {
        type: LOG_OUT
    }
}