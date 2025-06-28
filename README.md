# Look - Plataforma de Aprendizaje de Cine y Animación

## Descripción
Look es una plataforma de aprendizaje sobre cine y animación que ofrece módulos educativos sobre estilos, guiones, producción y edición.

## Características Principales

### 🎬 Carrusel de Videos Mejorado
- **Manejo Robusto de Promesas**: Implementación mejorada del manejo de promesas para `video.play()` y `video.pause()`
- **Compatibilidad con Autoplay**: Manejo correcto de las políticas de autoplay de navegadores modernos
- **Reproducción Inteligente**: Los videos se reproducen automáticamente cuando están visibles y se pausan cuando no lo están
- **Interacción del Usuario**: Los videos se reproducen después de la primera interacción del usuario con la página
- **Manejo de Errores**: Sistema robusto de manejo de errores para problemas de carga y reproducción

### 🔧 Mejoras Técnicas Implementadas

#### Manejo de Promesas de Video
```javascript
// Función segura para reproducir videos
async function playVideoSafely(video, index) {
    try {
        if (video.readyState >= 2) {
            video.playbackRate = 0.9;
            await video.play();
        }
    } catch (error) {
        console.warn(`Error reproduciendo video: ${error.message}`);
    }
}
```

#### IntersectionObserver para Visibilidad
- Los videos se reproducen automáticamente cuando están visibles en pantalla
- Se pausan cuando salen del área visible
- Optimiza el rendimiento y ahorra recursos

#### Políticas de Autoplay
- Manejo correcto de errores `NotAllowedError`
- Reproducción después de interacción del usuario
- Compatibilidad con navegadores móviles

## Estructura del Proyecto

```
Look/
├── assets/          # Recursos multimedia (videos, imágenes)
├── css/            # Estilos CSS
├── js/             # Scripts JavaScript
├── vistas/         # Páginas HTML
├── index.html      # Página principal
├── index.js        # Script principal con carrusel mejorado
└── README.md       # Este archivo
```

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome

## Instalación y Uso

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. Los videos del carrusel se reproducirán automáticamente después de la interacción del usuario

## Solución de Problemas

### Videos no se reproducen en GitHub Pages
- Los videos ahora manejan correctamente las políticas de autoplay
- Se requiere interacción del usuario para iniciar la reproducción
- Implementación robusta de manejo de errores

### Problemas de Rendimiento
- Los videos se pausan automáticamente cuando no están visibles
- Carga optimizada con `preload="metadata"`
- Manejo eficiente de recursos del navegador

## Contribución
Para contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT.
