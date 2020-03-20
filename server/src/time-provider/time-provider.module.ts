import {Module} from '@nestjs/common';
import {TimeProvider} from "./time.provider";
import {SystemTimeProvider} from "./system-time-provider.service";

@Module({
    providers: [
        {
            provide: TimeProvider,
            useClass: SystemTimeProvider,
        }
    ],
    exports: [
        TimeProvider
    ]
})
export class TimeProviderModule {
}
