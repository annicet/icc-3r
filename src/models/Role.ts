export enum RoleName {
  REFERENT = 'referent',
  RESPONSABLE = 'responsable',
  STAR = 'star',
  AIDE = 'aide',
  AP = 'AP',
  AE = 'AE',
  RESPONSABLE_EGLISE = 'responsable_eglise',
}

export interface Role {
  name: RoleName
  creationPermission: RoleName[]
}
