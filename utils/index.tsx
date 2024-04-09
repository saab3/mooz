export function checkActivePath(path:string, pathname:string){
  const currentPath:string = path.split("/").at(1)!
  const isActive = pathname == "/" ? path === "/" : currentPath.includes(pathname.split("/").at(1)!)
  return isActive
}