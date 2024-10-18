import { Auth, Users, Blog, Courses, Menu, Newsletter } from "../pages/admin";
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
          {["/admin", "/admin/blog"].map((path) => (
            <Route
              key={path}
              path={path}
              element={loadLayout(AdminLayout, Blog)}
            />
          ))}
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
          <Route
            path="/admin/courses"
            element={loadLayout(AdminLayout, Courses)}
          />
          <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />
          <Route
            path="/admin/newsletter"
            element={loadLayout(AdminLayout, Newsletter)}
          />
        </Fragment>
      )}
    </Routes>
  );
}
