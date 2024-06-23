export type Icon = {
  path: string
  alt?: string
}

export type SidebarProps = {
  id: number
  title: string
  route?: string | any
  icon?: Icon
};