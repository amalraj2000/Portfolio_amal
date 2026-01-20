@php
$educationData = [
    [
        'id' => 1,
        'degree' => 'Bachelor of Engineering (CSE)',
        'institution' => 'CMS College of Engineering and Technology',
        'university' => 'Anna University',
        'location' => 'Coimbatore',
        'period' => 'Graduated',
        'desc' => 'Specialized in Computer Science and Engineering, building a strong foundation in algorithms, data structures, and software engineering principles.'
    ],
    [
        'id' => 2,
        'degree' => 'Plus Two (Higher Secondary)',
        'institution' => 'Markaz HSS',
        'board' => 'Kerala State Syllabus',
        'location' => 'Calicut',
        'period' => 'Completed',
        'desc' => 'Focused on Computer Science and Mathematics, developing early programming skills and analytical thinking.'
    ],
    [
        'id' => 3,
        'degree' => 'Secondary Schooling',
        'institution' => 'Sri Sri Ravishankar Vidhya Mandhir (SSRVM)',
        'board' => 'CBSE Syllabus',
        'location' => 'Kovoor, Calicut',
        'period' => 'Completed',
        'desc' => 'Completed early education with a focus on holistic development and academic excellence.'
    ]
];
@endphp

<section id="education" class="section education-section">
    <div class="container">
        <div class="section-header fade-in-up">
            <h2 class="section-title">My <span class="text-gradient">Education</span></h2>
            <p class="section-subtitle">Academic background and qualifications.</p>
        </div>

        <div class="education-grid">
            @foreach($educationData as $index => $edu)
                <div class="education-card glass-card fade-in-up stagger-{{ $index + 1 }}">
                    
                    <div class="edu-header">
                        <div class="edu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 0 6 0 9 5 0-5 3-5 9-5v-5"/></svg>
                        </div>
                        <span class="edu-period">{{ $edu['period'] }}</span>
                    </div>

                    <h3 class="edu-degree">{{ $edu['degree'] }}</h3>
                    <h4 class="edu-institution">{{ $edu['institution'] }}</h4>
                    
                    <div class="edu-meta">
                        @if(isset($edu['university']))
                            <span class="edu-meta-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                {{ $edu['university'] }}
                            </span>
                        @endif
                        <span class="edu-meta-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            {{ $edu['location'] }}
                        </span>
                    </div>

                    <p class="edu-desc">{{ $edu['desc'] }}</p>
                </div>
            @endforeach
        </div>
    </div>
</section>
