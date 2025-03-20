import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/dashboard`} component={lazy(() => import(`./dashboard`))} />
        <Route path={`${APP_PREFIX_PATH}/catalog`} component={lazy(() => import(`./catalog`))} />
        <Route path={`${APP_PREFIX_PATH}/clients`} component={lazy(() => import(`./clients`))} />
        <Route path={`${APP_PREFIX_PATH}/banners`} component={lazy(() => import(`./banners`))} />
        <Route path={`${APP_PREFIX_PATH}/promo-codes`} component={lazy(() => import(`./promo-codes`))} />
        <Route path={`${APP_PREFIX_PATH}/promo-codes`} component={lazy(() => import(`./offline-places`))} />
        <Route path={`${APP_PREFIX_PATH}/employee`} component={lazy(() => import(`./employee`))} />
        <Route path={`${APP_PREFIX_PATH}/mailing`} component={lazy(() => import(`./mailing`))} />
        <Route path={`${APP_PREFIX_PATH}/system`} component={lazy(() => import(`./system`))} />
        <Route path={`${APP_PREFIX_PATH}/settings`} component={lazy(() => import(`./settings`))} />
        <Route path={`${APP_PREFIX_PATH}/mobile`} component={lazy(() => import(`./mobile`))} />
        <Route path={`${APP_PREFIX_PATH}/logs`} component={lazy(() => import(`./logs`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);