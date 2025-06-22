# ClonJunioLook

## Funcionalidades

### Persistencia de Imagen de Perfil

La aplicación ahora incluye una funcionalidad mejorada para la persistencia de la imagen de perfil seleccionada por cada usuario:

#### Características:
- **Persistencia por usuario**: Cada usuario tiene su propia imagen de perfil guardada en su objeto de datos
- **Persistencia entre sesiones**: La imagen seleccionada se mantiene incluso después de cerrar sesión y volver a iniciar
- **Múltiples opciones**: Los usuarios pueden elegir entre diferentes imágenes de perfil predefinidas
- **Feedback visual**: La imagen seleccionada se marca visualmente en el modal de edición

#### Cómo funciona:
1. Al seleccionar una imagen en el modal de edición de perfil, esta se guarda en la propiedad `profileImage` del usuario logueado
2. La imagen se almacena en el localStorage junto con los demás datos del usuario
3. Al cargar la página, se verifica si el usuario tiene una imagen guardada y se aplica automáticamente
4. La selección persiste entre diferentes sesiones y navegación entre páginas

#### Archivos modificados:
- `js/dashboard.js`: Lógica principal del modal de edición de perfil
- `vistas/dashboard.html`: Modal de edición de perfil con opciones de imagen

#### Estructura de datos del usuario:
```javascript
{
  userName: "nombre_usuario",
  userPass: "contraseña",
  logged: true/false,
  progreso: 0,
  certificado: false,
  profileImage: "url_de_la_imagen_seleccionada" // Nueva propiedad
}
```

## Instalación y Uso

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. Regístrate o inicia sesión
4. Ve al dashboard y haz clic en "Editar" en la sección de perfil
5. Selecciona una imagen de perfil y guarda los cambios
6. La imagen se mantendrá seleccionada en futuras sesiones
