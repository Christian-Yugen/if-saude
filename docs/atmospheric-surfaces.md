# Atmospheric Surface System — IF Saúde

O Atmospheric Surface System organiza páginas em capítulos visuais claros. Ele complementa os temas contextuais (`human`, `clinical`, `industrial` etc.): o tema define o domínio da página; a superfície define luz, profundidade e temperatura de cada seção.

## Variantes

| Surface | Papel narrativo | Contraste |
| --- | --- | --- |
| `pure` | Hero, entradas e aberturas luminosas | conteúdo escuro |
| `ivory` | conteúdo institucional, logos e confiança | conteúdo escuro |
| `mist` | ecossistemas, produtos e exploração | conteúdo escuro |
| `sage` | capítulos claros com presença cromática | conteúdo escuro |
| `emerald` | destaques de marca e chamadas de valor | conteúdo inverso |
| `forest` | métricas, autoridade e alto contraste | conteúdo inverso |
| `deep` | Footer, encerramentos e CTAs institucionais | conteúdo inverso |

## Uso em seções

```tsx
<Section surface="mist" density="standard">
  <Container>{/* conteúdo */}</Container>
</Section>
```

## Uso em wrappers

```tsx
<AtmosphericSurface variant="pure">
  <Hero />
  <InstitutionalIndicators />
</AtmosphericSurface>
```

## Regras

1. Atmosferas marcam capítulos completos, nunca pequenos componentes.
2. Limites entre seções devem ser legíveis; os gradientes criam luz interna, não escondem a divisão.
3. Não usar azul ou ciano como fundo atmosférico institucional.
4. Não aplicar cores HEX diretamente nas páginas. Usar apenas os tokens `--atmosphere-*`.
5. Pure, Ivory, Mist e Sage usam texto escuro. Emerald, Forest e Deep usam conteúdo inverso.
6. Evitar alternância repetitiva `Pure → Deep → Pure → Deep`.
7. A ordem semântica e a acessibilidade não podem depender da cor da superfície.

## Sequências recomendadas

- `Pure → Ivory → Sage → Mist → Deep`
- `Pure → Mist → Emerald → Ivory → Deep`
- `Ivory → Sage → Forest → Pure`

## Aplicação inicial na Home

- Hero + Indicadores: `pure`
- Empresas Atendidas: `ivory`
- Empresas e Trabalhadores: `sage`
- Nosso Ecossistema: `mist`
- Footer: `deep`
