export type SessionUser = {
  uid: string
  email: string
  name: string
  admin: boolean
  emailVerified: boolean
  avatarVersion: number
}

export type SessionData = {
  user: SessionUser | null
  csrfToken: string
  available: boolean
  message?: string
}

export type OrderStatus = 'pending' | 'in-progress' | 'completed' | 'cancelled'
export type OrderRequest = {
  requestId: string
  serviceId: string
  device?: string
  issue?: string
}
export type ServiceOrder = {
  id: string
  uid: string
  email: string
  service: string
  status: OrderStatus
  createdAt: number
  updatedAt: number
}
export type PublicStats = { visits: number; orders: number }
export type AdminUser = SessionUser & { disabled: boolean; createdAt: string }
export type UserPage = { users: AdminUser[]; nextCursor: string | null }
export type OrderPage = { orders: ServiceOrder[]; nextCursor: string | null }
export type ArchiveEntry = { id: string; name: string; email: string; service: string; time: string; count: number }
export type ArchivePage = { entries: ArchiveEntry[]; nextCursor: string | null }
