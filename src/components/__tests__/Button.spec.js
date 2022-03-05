import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button", () => {
    const testLabel = "Test title";

    it("Renders label", () => {
        const wrapper = mount(Button, { props: { label: testLabel } });
        expect(wrapper.text()).toContain(testLabel);
    });

    it("Sets color", () => {
        const testColor = ["#CCC", "rgb(204, 204, 204)"];
        const wrapper = mount(Button, {
            props: { label: testLabel, color: testColor[0] },
        });

        expect(
            wrapper
                .find("button")
                .element.style.getPropertyValue("background-color")
        ).toBe(testColor[1]);
    });
});
