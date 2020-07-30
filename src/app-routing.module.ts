import { Module } from '@nestjs/common';
import { Routes, RouterModule } from 'nest-router';

import { AuthModule } from './api/auth/auth.module';
import { ContentModule } from './api/content/content.module';
import { AdminModule } from './api/admin/admin.module';
import { SearchModule } from './api/search/search.module';

const routes: Routes = [
    {path: 'api', children: [
        {path: 'auth', module: AuthModule},
        {path: 'content', module: ContentModule},
        {path: 'admin', module: AdminModule},
        {path: 'search', module: SearchModule}
    ]}
];

@Module({
    imports: [
        RouterModule.forRoutes(routes),
        AuthModule,
        ContentModule,
        AdminModule,
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
