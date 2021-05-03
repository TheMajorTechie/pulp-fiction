import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FrontendUser, ThemePref } from '@dragonfish/shared/models/users';
import { UserState } from './repo/user';
import { ElectronService } from 'ngx-electron';
import { GlobalState } from './repo/global';

@UntilDestroy()
@Component({
    selector: 'dragonfish-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @Select(GlobalState.theme) theme$: Observable<ThemePref>;
    @Select(UserState.currUser) currentUser$: Observable<FrontendUser>;

    constructor(public electron: ElectronService) {}

    ngOnInit(): void {
        this.theme$.pipe(untilDestroyed(this)).subscribe(theme => {
            const body = document.getElementsByTagName('body')[0];
            const currTheme = body.classList.item(0);
            const html = document.getElementsByTagName('html')[0];
            console.log(typeof ThemePref[theme]);
            if (ThemePref[theme] !== null && ThemePref[theme] !== undefined) {
                if(ThemePref[theme] == 'dark-aqua' || ThemePref[theme] == 'dark-crimson' || ThemePref[theme] == 'dark-field' || ThemePref[theme] == 'dark-royal' || ThemePref[theme] === 'dusk-autumn') {
                    body.classList.replace(currTheme, ThemePref[theme]);
                    html.classList.add('dark');
                } else {
                    body.classList.replace(currTheme, ThemePref[theme]);
                    html.classList.remove('dark');
                }
            } else {
                body.classList.replace(currTheme, 'crimson');
            }
        });
    }
}
