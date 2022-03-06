<template>
    <div class="item">
        <i>
            <slot name="icon"></slot>
        </i>
        <div class="details">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.item {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--font-color);
}

.details {
    flex: 1;
    margin-left: 1rem;
    font-size: 16px;
}

i {
    display: flex;
    place-items: center;
    place-content: center;
    width: 36px;
    height: 60px;
}
</style>
