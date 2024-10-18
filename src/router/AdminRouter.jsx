import { Auth, Users ,Blog} from "../pages/admin";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "../layout";
import { Fragment } from "react";


const user = 1;

export function AdminRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*" element={loadLayout(AdminLayout, Auth)} />
      ) : (
        <Fragment>
{["/admin","/admin/blog"].map((path)=>(
  <Route key={path} path={path} element={loadLayout(AdminLayout,Blog)}/>
))}
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
        </Fragment>
      )}
    </Routes>
  );
}
