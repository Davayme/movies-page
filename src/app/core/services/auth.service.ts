import { inject, Injectable } from "@angular/core";
import { Auth, AuthProvider, authState, createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, UserCredential } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private auth = inject(Auth);
    readonly authState$ = authState(this.auth);

    sigUpWithEmail(email: string, password: string): Promise<UserCredential> {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    loginWithEmail(email: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    logOut(): Promise<void> {
        return this.auth.signOut();
    }

    signInWithGoogleProvider(): Promise<UserCredential> {
        const provider = new GoogleAuthProvider();
        return this.callPopUp(provider);
    }

    signInWithGithubProvider(): Promise<UserCredential> {
        const provider = new GithubAuthProvider();
        return this.callPopUp(provider);
    }

    signInWithFacebookProvider(): Promise<UserCredential> {
        const provider = new FacebookAuthProvider();
        return this.callPopUp(provider);
    }
    async callPopUp(provider: AuthProvider): Promise<UserCredential> {
        try {
            const result = await signInWithPopup(this.auth, provider);
            return result;
        } catch (error: any) {
            throw error;
        }
    }
}