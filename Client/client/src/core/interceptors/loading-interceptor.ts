import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs';
import { Loadingservice } from '../Services/loadingservice';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingSevice=inject(Loadingservice);
  loadingSevice.loading();
  return next(req).pipe(
    delay(1000),
    finalize(()=>loadingSevice.idle())
  );
};
