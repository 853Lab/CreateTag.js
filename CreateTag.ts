/**
 * 快速创建一个标签。 https://github.com/853Lab/CreateTag.js
 * @author Sonic853
 * @license "THE COFFEEWARE LICENSE"
 */
 const Create = new class {
    /**
     * 往标签的classList里插入class
     * @param {HTMLElement} m 标签
     * @param {string} c class
     * @returns {m}
     */
    a_c(m: HTMLElement, c: string): HTMLElement {
        let arr = c.indexOf(" ") !== -1 ? c.split(" ") : c.split(",")
        m.classList.add(...arr)
        return m;
    }
    /**
     * 创建一个标签
     * @param {string} t tag
     * @param {string} c class
     * @param {string} i innerHTML
     * @param {string} k title
     * @returns {HTMLElement}
     */
    tag(t: string, c?: string | undefined, i?: string | undefined, k?: string | undefined): any {
        let m = document.createElement(t)
        if (c) m = this.a_c(m, c)
        i && (m.innerHTML = i)
        if (k) m.title = k
        return m
    }
    /**
     * 创建span标签
     * @param {string} c class
     * @param {string} i innerHTML
     * @param {string} t title
     * @returns {HTMLSpanElement} 
     */
    span(c?: string | undefined, i?: string | undefined, t?: string | undefined): HTMLSpanElement {
        let m: HTMLSpanElement = this.tag("span", c, i)
        if (t) m.title = t
        return m
    }
    /**
     * 创建a标签
     * @param {string} c class
     * @param {string} h href
     * @param {string} i innerHTML
     * @param {"_self"|"_blank"|"_parent"|"_top"} g target
     * @param {string} t title
     * @returns {HTMLAnchorElement}
     */
    a(c?: string | undefined, h?: string | undefined, i?: string | undefined, g?: "_self" | "_blank" | "_parent" | "_top" | undefined, t?: string | undefined): HTMLAnchorElement {
        let m: HTMLAnchorElement = this.tag("a", c, i, t)
        if (h) m.href = h
        if (g) m.target = g
        return m
    }
    /**
     * 创建input标签
     * @param {string} c class
     * @param {"button"|"checkbox"|"color"|"date"|"datetime-local"|"email"|"file"|"hidden"|"image"|"month"|"number"|"password"|"radio"|"range"|"reset"|"search"|"submit"|"tel"|"text"|"time"|"url"|"week"} t type
     * @param {string} v value
     * @param {string} p placeholder
     * @param {string} n name
     * @returns {HTMLInputElement}
     */
    input(c?: string | undefined, t?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week" | undefined, v?: string | undefined, p?: string | undefined, n?: string | undefined): HTMLInputElement {
        let m: HTMLInputElement = this.tag("input", c)
        if (t) m.type = t
        if (v) m.value = v
        if (p) m.placeholder = p
        if (n) m.name = n
        return m
    }
    /**
     * 创建select标签
     * @param {string} c class
     * @returns {HTMLSelectElement}
     */
    select(c?: string | undefined, n?: string | undefined): HTMLSelectElement {
        let m: HTMLSelectElement = this.tag("select", c)
        if (n) m.name = n
        return m
    }
    /**
     * 创建option标签
     * @param {string} v value
     * @param {string} i innerHTML
     * @returns {HTMLOptionElement}
     */
    option(v?: string | undefined, i?: string | undefined): HTMLOptionElement {
        let m: HTMLOptionElement = this.tag("option", undefined, i)
        if (v) m.value = v
        return m
    }
    /**
     * 创建p标签
     * @param {string} i innerHTML
     * @param {string} c class
     * @returns {HTMLParagraphElement}
     */
    p(i?: string | undefined, c?: string | undefined): HTMLParagraphElement {
        return this.tag("p", c, i)
    }
    /**
     * 创建div标签
     * @param {string} c class
     * @param {string} i innerHTML
     * @param {string} t title
     * @returns {HTMLDivElement}
     */
    div(c?: string | undefined, i?: string | undefined, t?: string | undefined): HTMLDivElement {
        return this.tag("div", c, i, t)
    }
    /**
     * 创建button标签
     * @param {string} i innerHTML
     * @param {string} c class
     * @returns {HTMLButtonElement}
     */
    button(i?: string | undefined, c?: string | undefined): HTMLButtonElement {
        return this.tag("button", c, i)
    }
    /**
     * 在select标签里创建option标签
     * @param {HTMLSelectElement} s select标签
     * @param {string} v value
     * @param {string} i innerHTML
     * @returns {[s,HTMLOptionElement]}
     */
    i_option(s: HTMLSelectElement, v: string | undefined, i: string | undefined): [HTMLSelectElement, HTMLOptionElement] {
        let o = this.option(v, i)
        s.appendChild(o)
        return [s, o]
    }
    /**
     * 创建table标签
     * @param {string} c class
     * @returns {HTMLTableElement}
     */
    table(c?: string | undefined): HTMLTableElement {
        return this.tag("table", c)
    }
    /**
     * 创建tbody标签
     * @returns {HTMLTableSectionElement}
     */
    tbody(): HTMLTableSectionElement {
        return this.tag("tbody")
    }
    /**
     * 创建tr标签
     * @param {string} c class
     * @returns {HTMLTableRowElement}
     */
    tr(c?: string | undefined): HTMLTableRowElement {
        return this.tag("tr", c)
    }
    /**
     * 创建th标签
     * @param {string} i innerHTML
     * @param {string} c class
     * @returns {HTMLTableCellElement}
     */
    th(i?: string | undefined, c?: string | undefined): HTMLTableCellElement {
        return this.tag("th", c, i)
    }
    /**
     * 创建td标签
     * @param {string} i innerHTML
     * @param {string} c class
     * @returns {HTMLTableCellElement}
     */
    td(i?: string | undefined, c?: string | undefined): HTMLTableCellElement {
        return this.tag("td", c, i)
    }
    /**
     * 创建h标签
     * @param {1|2|3|4|5|6} number 
     * @param {string} i innerHTML
     * @param {string} c class
     * @returns {HTMLHeadingElement}
     */
    h(number: 1 | 2 | 3 | 4 | 5 | 6 = 1, i?: string | undefined, c?: string | undefined): HTMLHeadingElement {
        return this.tag("h" + number.toString(), c, i)
    }
    /**
     * 创建img标签
     * @param {string} src src
     * @param {string} a alt
     * @param {string} c class
     * @returns {HTMLImageElement}
     */
    img(src?: string | undefined, a?: string | undefined, c?: string | undefined): HTMLImageElement {
        let m: HTMLImageElement = this.tag("img", c)
        if (src) m.src = src
        if (a) m.alt = a
        return m
    }
    /**
     * 创建canvas标签
     * @param {string} c class
     * @param {string} d id
     * @returns {HTMLCanvasElement}
     */
    canvas(c?: string | undefined, d?: string | undefined): HTMLCanvasElement {
        let m: HTMLCanvasElement = this.tag("canvas", c)
        if (d) m.id = d
        return m
    }
    /**
     * 创建form标签
     * @returns {HTMLFormElement}
     */
    form(): HTMLFormElement {
        return this.tag("form")
    }
    /**
     * 创建ul标签
     * @param {string} c class
     * @param {string} d id
     * @param {string} i innerHTML
     * @returns {HTMLUListElement}
     */
    ul(c?: string | undefined, d?: string | undefined, i?: string | undefined): HTMLUListElement {
        let m: HTMLUListElement = this.tag("ul", c, i)
        if (d) m.id = d
        return m
    }
    /**
     * 创建ol标签
     * @param {string} c class
     * @param {string} d id
     * @param {string} i innerHTML
     * @returns {HTMLOListElement}
     */
    ol(c?: string | undefined, d?: string | undefined, i?: string | undefined): HTMLOListElement {
        let m: HTMLOListElement = this.tag("ol", c, i)
        if (d) m.id = d
        return m
    }
    /**
     * 创建li标签
     * @param {string} i innerHTML
     * @param {string} c class
     * @param {string} d id
     * @returns {HTMLLIElement}
     */
    li(i?: string | undefined, c?: string | undefined, d?: string | undefined): HTMLLIElement {
        let m: HTMLLIElement = this.tag("li", c, i)
        if (d) m.id = d
        return m
    }
    /**
     * 在ul或ol标签里创建li标签
     * @param {HTMLUListElement|HTMLOListElement} uo ul 或 ol
     * @param {string} i innerHTML
     * @param {string} c class
     * @param {string} d id
     * @returns {[uo,HTMLLIElement]}
     */
    i_li(uo: HTMLUListElement | HTMLOListElement, i?: string | undefined, c?: string | undefined, d?: string | undefined): [HTMLUListElement | HTMLOListElement, HTMLLIElement] {
        let m: HTMLLIElement = this.li(i, c, d)
        uo.appendChild(m)
        return [uo, m]
    }
    /**
     * 创建label标签
     * @param {string} c 
     * @param {string} i 
     * @param {HTMLInputElement} obj 
     * @returns {[HTMLLabelElement,obj]}
     */
    label(c?: string, i?: string, obj?: HTMLInputElement): [HTMLLabelElement, HTMLInputElement | undefined] {
        let m: HTMLLabelElement = this.tag("label", c)
        if (obj) {
            m.appendChild(obj)
            if (i) m.appendChild(Create.span(undefined, i))
            return [m, obj]
        }
        else {
            if (i) m.appendChild(Create.span(undefined, i))
            return [m, undefined]
        }
    }
}
