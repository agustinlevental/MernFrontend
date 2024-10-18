/* eslint-disable react/prop-types */
export  function AdminLayout(props ) {
  const { children } = props;
  return (
    <div>
      <h>se está usando el AdminLayout</h>
      {children}
    </div>
  );
}
