import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { FormInfo } from '../todoTypes';
export async function signUp(form: FormInfo) {
  createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((cred) => console.log(cred.user))
    .catch((err: Error) => console.log(err));

  /*
  accessToken
: 
"eyJhbGciOiJSUzI1NiIsImtpZCI6IjYyM2YzNmM4MTZlZTNkZWQ2YzU0NTkyZTM4ZGFlZjcyZjE1YTBmMTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9kby05NTE5NyIsImF1ZCI6InRvZG8tOTUxOTciLCJhdXRoX3RpbWUiOjE2OTA3NTMwNzQsInVzZXJfaWQiOiJrYktJZUFYM0FhZm5WVVhBdzVZNktTb1FLdUoyIiwic3ViIjoia2JLSWVBWDNBYWZuVlVYQXc1WTZLU29RS3VKMiIsImlhdCI6MTY5MDc1MzA3NCwiZXhwIjoxNjkwNzU2Njc0LCJlbWFpbCI6ImphbmVkb2VAbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamFuZWRvZUBtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ty77k61UDe_Pt_rbBh39KL-Z1yKBIzGzTpTuUT78e8-jL_aDP8OC2YHt9VmFiS-ifGjiIJSwrkV_DUAa_Oq4I2BBdmaujt0tThz-p4oFIxYMooVmJSZURJkOvLhBepCGTv6GqgLMvuIlJQe19kri_-qnsg90kpIaRQ3dvPaQupKOmkpDe-pOOI_K720soQWAQWi2YiqTFEkHB-JOZvUf3OshovQjoSNNKRIhYLxHYy8UguQMZDJZHzVjoLuf_ZcOygC5G6x8THXBaS-gK0CHK1EPHY-b6XVvhr6MScX1Iowdu-ZERUr0PtKa0-w5vvQ8GiftAUAQ0GL0iYnibILe1A"
auth
: 
AuthImpl {app: FirebaseAppImpl, heartbeatServiceProvider: Provider, appCheckServiceProvider: Provider, config: {…}, currentUser: _UserImpl, …}
displayName
: 
null
email
: 
"janedoe@mail.com"
emailVerified
: 
false
isAnonymous
: 
false
metadata
: 
UserMetadata {createdAt: '1690753074549', lastLoginAt: '1690753074549', lastSignInTime: 'Sun, 30 Jul 2023 21:37:54 GMT', creationTime: 'Sun, 30 Jul 2023 21:37:54 GMT'}
phoneNumber
: 
null
photoURL
: 
null
proactiveRefresh
: 
ProactiveRefresh {user: _UserImpl, isRunning: false, timerId: null, errorBackoff: 30000}
providerData
: 
[{…}]
providerId
: 
"firebase"
reloadListener
: 
null
reloadUserInfo
: 
{localId: 'kbKIeAX3AafnVUXAw5Y6KSoQKuJ2', email: 'janedoe@mail.com', passwordHash: 'UkVEQUNURUQ=', emailVerified: false, passwordUpdatedAt: 1690753074549, …}
stsTokenManager
: 
_StsTokenManager {refreshToken: 'AMf-vBxJAMUXTz-U0U1aERDrJEpwKEhVhBmSu0ciB_HL1SbUZj…W0KFFw9diTJPkK6A5-VK34MMszWEFGz61CtGcUxFUEDxab30M', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjYyM2YzNmM4MTZlZTNkZW…cX1Iowdu-ZERUr0PtKa0-w5vvQ8GiftAUAQ0GL0iYnibILe1A', expirationTime: 1690756674121}
tenantId
: 
null
uid
: 
"kbKIeAX3AafnVUXAw5Y6KSoQKuJ2"
  */
}
