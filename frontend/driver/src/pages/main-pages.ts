/**
 * @license MIT
 * @version 1.1.0
 * @author M.A.R.S. Labs
 */

import { Platform } from "ionic-angular";
import { Injectable, isDevMode } from "@angular/core";

import { AppGlobals } from "@app/app.globals";
import { AppConstants } from "@app/app.constants";

import { MarsPushNotificationService } from "@services/push-notification.service";
import { MarsAuthService } from "@services/auth.service";

declare var Mars;

@Injectable()
export class AppMainPages {
    constructor(platform: Platform,
        public globals: AppGlobals,
        notificationService: MarsPushNotificationService) { };

    public refresh() {
        let pages = [
            {
                getRoot: () => { return "LoginPage"; },
                getRootParams: () => { return {} },
                getTitle: () => { return "Entrar"; },
                getUrlPath: () => { return "app" },
                getIcon: () => { return "log-in"; },
                getBadge: () => { return 0; },
                canShow: () => { return !MarsAuthService.isLoggedIn(); },
                disable: () => { return this.globals.disableNavigation }
            },
            {
                getRoot: () => { return "MerchantCalendarPage"; },
                getRootParams: () => { return {} },
                getTitle: () => { return "Meus Fretes"; },
                getUrlPath: () => { return "calendar" },
                getIcon: () => { return "calendar"; },
                getBadge: () => { return 0; },
                canShow: () => { return MarsAuthService.hasRole('MERCHANT') },
                disable: () => { return this.globals.disableNavigation }
            },
            {
                getRoot: () => { return "JobsListPage"; },
                getRootParams: () => { return {} },
                getTitle: () => { return "Fretes"; },
                getUrlPath: () => { return "jobs" },
                getIcon: () => { return "car"; },
                getBadge: () => { return 0; },
                canShow: () => { return MarsAuthService.hasRole('MERCHANT') },
                disable: () => { return this.globals.disableNavigation }
            },
            {
                getRoot: () => { return "MerchantSettingsPage"; },
                getRootParams: () => { return {} },
                getTitle: () => { return "Configura????es"; },
                getUrlPath: () => { return "settings" },
                getIcon: () => { return "settings"; },
                getBadge: () => { return 0; },
                canShow: () => { return MarsAuthService.hasRole('MERCHANT') },
                disable: () => { return this.globals.disableNavigation }
            },
            {
                getRoot: () => { return "AboutPage"; },
                getRootParams: () => { return {} },
                getTitle: () => { return "Sobre"; },
                getUrlPath: () => { return "about" },
                getIcon: () => { return "information-circle"; },
                getBadge: () => { return 0; },
                canShow: () => { return true; },
                disable: () => { return this.globals.disableNavigation }
            }
        ];

        this.globals.mainPages = pages;
        return pages;
    }
}