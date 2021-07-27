export const plainHTML = `
<h1 class="title">Leaderboard</h1>
<section class="content">
    <article class="left">
        <div class="head">
            <h2 class="subtitle-left">Recent scores</h2>
            <button class="refresh">Refresh</button>
        </div>
        <ul class="score-list">
        </ul>
    </article>
    <article class="right">
        <h2 class="subtitle-right">Add your score</h2>
        <form>
            <ul>
                <li>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="user_name" placeholder="Your name" />
                </li>
                <li>
                    <label for="score">Score:</label>
                    <input type="text" id="score" name="user_score" placeholder="Your score" />
                </li>
                <li>
                    <button type="submit" class="submit">Submit</button>
                </li>
            </ul>
        </form>
    </article>
</section>`;
