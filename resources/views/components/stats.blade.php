@php
$stats = [
    ['label' => 'Experience', 'value' => '2+ Years'],
    ['label' => 'Live Projects', 'value' => '10+'],
    ['label' => 'Framework', 'value' => 'Laravel'],
    ['label' => 'Cloud', 'value' => 'AWS']
];

$skills = [
    'PHP / Laravel',
    'React.js',
    'MySQL',
    'PostgreSQL',
    'DynamoDB',
    'Javascript',
    'Docker',
    'Git'
];
@endphp

<section class="stats-section">
    <div class="container">
        <div class="stats-grid">
            @foreach($stats as $index => $stat)
                <div class="glass-card stat-card fade-in-up stagger-{{ $index + 1 }}">
                    <h3 class="stat-value">{{ $stat['value'] }}</h3>
                    <p class="stat-label">{{ $stat['label'] }}</p>
                </div>
            @endforeach
        </div>

        <div class="skills-ticker fade-in-up stagger-5">
            <p><strong>Tech & Tools:</strong> {{ implode(' • ', $skills) }}</p>
        </div>
    </div>
</section>
