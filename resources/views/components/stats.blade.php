@php
$stats = [
    ['label' => 'Experience', 'value' => '2 Years'],
    ['label' => 'Live Projects', 'value' => '10+'],
    ['label' => 'Framework', 'value' => 'Laravel'],
    ['label' => 'Cloud', 'value' => 'AWS S3']
];

$skills = [
    'PHP / Laravel 12',
    'MySQL',
    'MongoDB',
    'DynamoDB',
    'Javascript',
    'AI Tools (Cursor, Antigravity)'
];
@endphp

<section class="section stats-section">
    <div class="container">
        <div class="stats-grid">
            @foreach($stats as $index => $stat)
                <div class="stat-card glass scale-up stagger-{{ $index + 1 }}">
                    <h3 class="stat-value">{{ $stat['value'] }}</h3>
                    <p class="stat-label">{{ $stat['label'] }}</p>
                </div>
            @endforeach
        </div>

        <div class="skills-ticker glass">
            <p><strong>Tech & Tools:</strong> {{ implode(' • ', $skills) }}</p>
        </div>
    </div>
</section>
