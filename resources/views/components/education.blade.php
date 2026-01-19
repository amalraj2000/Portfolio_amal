@php
$educationData = [
    [
        'id' => 1,
        'degree' => 'Bachelor of Engineering (CSE)',
        'institution' => 'CMS College of Engineering and Technology',
        'university' => 'Anna University',
        'location' => 'Coimbatore',
        'period' => 'Graduated',
        'desc' => 'Specialized in Computer Science and Engineering.'
    ],
    [
        'id' => 2,
        'degree' => 'Plus Two (Higher Secondary)',
        'institution' => 'Markaz HSS',
        'board' => 'State Syllabus',
        'location' => 'Calicut',
        'period' => 'Completed',
        'desc' => 'Focus on Science and Mathematics foundation.'
    ],
    [
        'id' => 3,
        'degree' => 'Secondary Schooling',
        'institution' => 'Sri Sri Ravishankar Vidhya Mandhir (SSRVM)',
        'board' => 'CBSE Syllabus',
        'location' => 'Kovoor, Calicut',
        'period' => 'Completed',
        'desc' => 'Early education with a focus on holistic development.'
    ]
];
@endphp

<section id="education" class="section education-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">My <span class="highlight">Education</span></h2>
            <p class="section-subtitle">Academic background and qualifications.</p>
        </div>

        <div class="education-grid">
            @foreach($educationData as $edu)
                <div class="edu-card glass">
                    <span class="edu-period">{{ $edu['period'] }}</span>
                    <h3 class="edu-degree">{{ $edu['degree'] }}</h3>
                    <h4 class="edu-institution">{{ $edu['institution'] }}</h4>
                    <p class="edu-meta">
                        @if(isset($edu['university']))
                            <span>{{ $edu['university'] }} | </span>
                        @endif
                        @if(isset($edu['board']))
                            <span>{{ $edu['board'] }} | </span>
                        @endif
                        {{ $edu['location'] }}
                    </p>
                    <p class="edu-desc">{{ $edu['desc'] }}</p>
                </div>
            @endforeach
        </div>
    </div>
</section>
