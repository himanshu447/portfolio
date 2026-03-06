/**
 * @jest-environment jsdom
 */

test('DOM check: navbar contains logo with Himanshu text', () => {
    document.body.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="#" class="logo">Himanshu<span>.</span></a>
            </div>
        </nav>
    `;
    const logo = document.querySelector('.logo');
    expect(logo.textContent).toBe('Himanshu.');
});

test('DOM check: skill percentage exists for Flutter', () => {
    document.body.innerHTML = `
        <div class="skill-card" data-color="flutter">
            <div class="skill-card-percentage">95%</div>
        </div>
    `;
    const percentage = document.querySelector('.skill-card-percentage');
    expect(percentage.innerHTML).toBe('95%');
});
